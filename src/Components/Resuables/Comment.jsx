const Comment = () => {
  return (
    <section className="bg-white mb-20">
      <div className="max-w-[960px] mx-auto  lg:py-10 px-6 lg:px-20 comment">
        <h2 className="text-[24px] lg:text-[2rem] text-[#011717] font-bold mb-4">
          Leave a comment
        </h2>
        <p className="text-[#090302] text-[14px] mb-6">
          Drop your feedback below, and we'll be prompt in responding. Thank you
          for being a part of our community
        </p>
        <form action="">
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="text-[14px] text-[#5B5756] mb-2">
              E-mail Address
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter email here"
              className="border-[#5B5756] border-[2px] p-4 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="comment"
              className="text-[14px] text-[#5B5756] mb-2"
            >
              Type your comment here
            </label>
            <textarea
              name="comment"
              cols="30"
              rows="10"
              placeholder="I would like...."
              className="border-[#5B5756] border-[2px] p-4 focus:outline-none"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <button className="bg-[#03312E] border-[#02211F] border-[1px] p-4 text-[16px] text-[#FDFFFD]">
              Submit Comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Comment;
