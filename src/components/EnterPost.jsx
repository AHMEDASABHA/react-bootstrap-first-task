import Input from "./ui/Input";
import PostButton from "./ui/PostButton";

export default function EnterPost() {
  return (
    <div className="shadow-sm px-3 pt-3 bg-body-tertiary rounded">
      <Input />
      <PostButton className="mb-3 px-3 py-2" />
    </div>
  );
}
