import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/posts/$postId')({
    component: Post,
})

function Post() {
    return <div>Hello "/posts/$postId"</div>
}