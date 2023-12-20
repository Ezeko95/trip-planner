import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>hola</h1>
      <DynamicMap />
    </div>
  );
}
