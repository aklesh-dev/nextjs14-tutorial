# App Route

- Next.js automates routing through its file-based routing system. 
- A file placed in the src/app directory will automatically become a route in your application. 
In this case:
> The page.jsx file inside the contact folder translates to the /contact route in your web application. 
- You can access the contact page by navigating to:
 ` http://yourdomain.com/contact `

## Nested Route
>This project showcases a Next.js application that utilizes nested routing. The blog page is set up to allow for hierarchical routes, enabling users to view blog categories and specific blog posts efficiently.

- The file structure for the blog pages might look like this:
/src/app
  ├── blog
  │   ├── page.jsx          // BlogPage Component
  │   └── [slug]
  │       └── page.jsx      // Blog Post Component

- Component Definition: The BlogPage function is defined as a React component that represents the main blog page.
- Export: It's exported as a default export, making it accessible for routing.
- JSX Return: The component returns a basic structure with a heading and introductory text.

### Nested Route for Blog Posts
- For each blog post, you can create a dynamic route. Here’s how the blog post page would look, located at /src/app/blog/[slug]/page.jsx:

##### Explanation
- Dynamic Route: The [slug] folder allows you to create dynamic routes based on the blog post ID.
- Props: The params object contains route parameters, allowing you to display content specific to each post.
- JSX Return: The component returns the post's title and ID.

> Next.js uses file-based routing, making nested routes straightforward. <br/>
> The structure above translates to the following routes:

- Blog Page: Accessible at
`http://yourdomain.com/blog`

- Blog Post Page: Accessible at
`http://yourdomain.com/blog/[postId]`

- For example, a blog post with slug of 1 would be accessed via:
`http://yourdomain.com/blog/1`

### Grouped pages
> This project is a Next.js application that implements authentication-related pages, including registration, login, and forgot password functionality. These pages are grouped under the auth route for better organization.

#### - File Structure
`/src/app/(auth)`  
`|--register` <br/>
`|--login`<br/>
`|--forgot-password`
- Register Page : accessible at
`http://yourdomain.com/register`
- Login Page : accessible at
`http://yourdomain.com/login`
- Forgot password Page : accessible at
`http://yourdomain.com/forgot-password`

>(auth) is igonored it does not count as route
