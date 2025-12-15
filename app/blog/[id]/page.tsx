interface BlogProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetail({ params }: BlogProps) {
  const { id } = await params;

  return (
    <h1>
      Detail Blog dengan ID: {id}
    </h1>
  );
}
