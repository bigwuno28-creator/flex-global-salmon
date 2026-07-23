import { useParams } from "react-router-dom";

function ProductDetail() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Product: {slug}
      </h1>
    </div>
  );
}

export default ProductDetail;