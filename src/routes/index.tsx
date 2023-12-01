import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Salut World</Title>
      <h1>Sup world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      div class="container-fluid">
    <h1 class="box light-blue-box rokkitt text-center">
      RANDOM NAME GENERATOR
    </h1>
    <div class="box light-gray-box rokkitt text-center">
      <h3>Instructions</h3>
      <h4>Click the "Generate" Button to Generate a Random Name!</h4>
    </div>
    <h4></h4>
    <button onclick="generator()" class="btn btn-primary btn-block btn-large">Generate!</button>
    <h1 class="jumbotron text-center rokkitt" id="name">Your Name Will Appear Here</h1>
  </div>
</body><div class="container-fluid">
    <h1 class="box light-blue-box rokkitt text-center">
      RANDOM NAME GENERATOR
    </h1>
    <div class="box light-gray-box rokkitt text-center">
      <h3>Instructions</h3>
      <h4>Click the "Generate" Button to Generate a Random Name!</h4>
    </div>
    <h4></h4>
    <button onclick="generator()" class="btn btn-primary btn-block btn-large">Generate!</button>
    <h1 class="jumbotron text-center rokkitt" id="name">Your Name Will Appear Here</h1>
  </div>
    </main>
  );
}

</body>
