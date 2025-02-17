import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/posts/$postId')({
    component: Post,
    loader: async ({params}) => {
        // throw new Error();
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return {
            postId: params.postId, 
        };
    },
    pendingComponent: () => <div>Loading ...</div>,
    errorComponent: () => <div>Error </div>
})

function Post() {
    const { postId } = Route.useLoaderData();

    return <div>Hello {postId} </div>
}