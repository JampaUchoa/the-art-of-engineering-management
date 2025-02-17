
type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
  );
}
