import LinkComponent from "./components/Link";

export default function Error() {
  return (
    <div>
      <h1>Você se perdeu e caiu na página 404</h1>
      <LinkComponent href="/home">Ir para a home</LinkComponent>
    </div>
  )
}
