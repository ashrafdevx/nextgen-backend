import OurBlogs from "../utils/blogs";
import ContactForm from "../utils/ContactForm";

const Blogs = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="sm:px-0  lg:py-10">
        {/* <h1 className="flex text-3xl font-medium justify-center sm:text-4xl md:text-5xl pt-4  sm:pt-7">
          Our Blogs
        </h1> */}
        <OurBlogs />
        <ContactForm />
      </div>
    </div>
  );
};

export default Blogs;
