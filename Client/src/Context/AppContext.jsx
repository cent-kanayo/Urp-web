import { createContext, useContext, useEffect, useState } from 'react';
import { client, getPosts } from '../../sanity';

const AppContent = createContext(null);

const AppContext = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const posts = await getPosts();
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
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <AppContent.Provider value={{ posts, post, isLoading, fetchSinglePost }}>
      {children}
    </AppContent.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContent);
};
export default AppContext;
