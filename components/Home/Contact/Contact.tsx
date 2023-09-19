import Link from "@/components/Shared/Link";

const Contact = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">联系我们</h2>

      <p className="text-lg font-normal text-gray-100">
        你可以发送邮件到{" "}
        <Link
          href="mailto:FeedBack@takagi3.cn"
          className="text-blue-400 hover:!text-blue-300"
        >
          FeedBack@takagi3.cn
        </Link>
      </p>
    </div>
  );
};

export default Contact;
