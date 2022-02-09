//CONTACT FORM COMPONENT

//IMPORTING
import { useForm } from "react-hook-form";

//CONTACT FORM
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-user"></i>
                    <input {...register("name", { required: true })} type="text" name="name" placeholder="Seu nome" />
                    {errors.name && <span className="text-danger">Campo obrigatório</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-envelope"></i>
                    <input {...register("email", { required: true })} type="email" name="email" placeholder="Seu email" />
                    {errors.email && <span className="text-danger">Campo obrigatório</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-phone"></i>
                    <input {...register("phone", { required: true })} type="text" name="phone" placeholder="Telefone para contato" />
                    {errors.phone && <span className="text-danger">Campo obrigatório</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-pencil-alt"></i>
                    <input {...register("subject", { required: true })} type="text" name="subject" placeholder="Assunto" />
                    {errors.subject && <span className="text-danger">Campo obrigatório</span>}
                </div>
            </div>
            <div className="col-md-12">
                <div className="input-form">
                    <i className="fa fa-edit"></i>
                    <textarea {...register("message", { required: true })} name="message" placeholder="Sua mensagem..."></textarea>
                    {errors.message && <span className="text-danger">Campo obrigatório</span>}
                </div>
            </div>
            <div className="col-md-12 text-center">
                <button className="arkay-btn" type="submit">Enviar Mensagem<i className="fa fa-long-arrow-right"></i></button>
            </div>
        </form>
    );
};

export default ContactForm;
