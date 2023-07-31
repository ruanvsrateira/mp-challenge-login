import { Fragment, useState } from "react";
import Image from "./assets/images/container-image.png";
import { Title } from "./components/Title";
import { TextInput } from "./components/TextInput";
import { UnderlineText } from "./components/UnderlineText";
import { Button } from "./components/Button";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitForm() {
    if (email == "" || password == "") {
      alert("Preencha todos os Campos !");
      return;
    }

    alert("Logado com sucesso!");
  }

  return (
    <Fragment>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <div className="w-[1000px] bg-[#070709] flex items-center rounded-[32px]">
          <div className="w-[45%] h-[100%] p-5 flex flex-col items-center">
            <Title text="Faça o seu Login" />
            <form
              className="w-[80%] flex flex-col gap-5 mt-[40px]"
              onSubmit={handleSubmitForm}
            >
              <TextInput
                label="E-mail"
                type="email"
                value={email}
                onChange={({ value }) => setEmail(value)}
              />
              <TextInput
                label="Senha"
                type="password"
                value={password}
                onChange={({ value }) => setPassword(value)}
              />
              <UnderlineText alignment="right" text="Esqueci minha senha" />
              <Button text="Entrar" type="submit" />
              <UnderlineText alignment="center" text="Ainda não tenho Conta?" />
            </form>
          </div>
          <div className="w-[55%] h-[100%]">
            <img
              src={Image}
              alt="Background Container"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
