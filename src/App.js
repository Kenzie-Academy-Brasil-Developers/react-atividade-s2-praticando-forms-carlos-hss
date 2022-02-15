import "./App.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
    Form,
    Input,
    Div,
    Button,
    FloatLabel,
    Label,
} from "./StyleComponents/StyledComponents";

function App() {
    const formSchema = yup.object().shape({
        user: yup.string().required("Nome de usuário obrigatório"),
        name: yup.string().required("Nome completo obrigatório"),
        email: yup
            .string()
            .required("E-mail obrigatório")
            .email("E-mail inválido"),
        emailConfirm: yup
            .string()
            .required("Confirmação de e-mail obrigatória")
            .email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
        passwordConfirm: yup
            .string()
            .required("Confirmação de senha obrigatória"),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = (data) => console.log(data);

    return (
        <div className="App">
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <FloatLabel>
                    <Input
                        placeholder="Nome de usuário *"
                        {...register("user")}
                    />
                    <Label>Nome de usuário</Label>
                </FloatLabel>
                <FloatLabel>
                    <Input
                        placeholder="Nome completo *"
                        {...register("name")}
                    />
                    <Label>Nome completo</Label>
                </FloatLabel>
                <FloatLabel>
                    <Input
                        placeholder="Endereço de Email *"
                        {...register("email")}
                    />
                    <Label>Endereço de Email</Label>
                </FloatLabel>
                <FloatLabel>
                    <Input
                        placeholder="Confirme seu Email *"
                        {...register("emailConfirm")}
                    />
                    <Label>Confirme seu Email</Label>
                </FloatLabel>
                <Div>
                    <FloatLabel>
                        <Input
                            placeholder="Senha *"
                            {...register("password")}
                        />
                        <Label>Senha</Label>
                    </FloatLabel>
                    <FloatLabel>
                        <Input
                            placeholder="Confirme sua senha *"
                            {...register("passwordConfirm")}
                        />
                        <Label>Confirme sua senha</Label>
                    </FloatLabel>
                </Div>
                <Button type="submit">CADASTRAR</Button>
            </Form>
        </div>
    );
}

export default App;
