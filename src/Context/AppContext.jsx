import { createContext, useContext, useEffect, useState } from 'react';
import { client, getPosts, getStudentOfTheMonth } from '../../sanity';

const AppContent = createContext(null);

const AppContext = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [students, setStudents] = useState([]);
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const posts = await getPosts();
      const studentOfTheMonth = await getStudentOfTheMonth();
      setStudents(studentOfTheMonth);
      setPosts(posts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchSinglePost = async (id) => {
    try {
      setIsLoading(true);
      const post = await client.getDocument(id);
      setIsLoading(false);
      setPost(post);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchStudent = async (id) => {
    try {
      setIsLoading(true);
      const post = await client.getDocument(id);
      setIsLoading(false);
      setPost(post);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <AppContent.Provider
      value={{
        posts,
        post,
        isLoading,
        students,
        fetchSinglePost,
        fetchStudent,
      }}
    >
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContent);
};
export default AppContext;
