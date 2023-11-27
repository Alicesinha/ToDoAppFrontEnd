import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createTaskSchemaValues, createTasksSchema } from "./schema";
import { sendTasks } from "../../states/actions/tasks.actions";
import { useAppState } from "../../context/AppState";
import { DefaultButton } from "../../buttons/DefaultButton";

export function CreateText() {
  const { dispatch } = useAppState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createTasksSchema>({
    mode: "all",
    resolver: zodResolver(createTaskSchemaValues),
  });

  const onSubmit = (data: createTasksSchema) => {
    try {
      sendTasks(data, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <form
          className="card-body table-responsive"
          id="formCadastroClientes"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="">
            {" "}
            Title
            <input
              className={`${errors?.tittle && "is-invalid"} form-control`}
              aria-describedby="tittleFeedback"
              {...register("tittle")}
            />
            {errors?.tittle && (
              <div id="tittleFeedback" className="invalid-feedback">
                {errors?.tittle?.message}
              </div>
            )}
          </label>
          <label htmlFor="">
            {" "}
            Description
            <input
              className={`${errors?.description && "is-invalid"} form-control`}
              aria-describedby="descriptionFeedback"
              {...register("description")}
            />
            {errors?.description && (
              <div id="descriptionFeedback" className="invalid-feedback">
                {errors?.description?.message}
              </div>
            )}
          </label>
          <label htmlFor="">
            {" "}
            DeliveryDate
            <input
              className={`${errors?.DeliveryDate && "is-invalid"} form-control`}
              aria-describedby="DeliveryDateFeedback"
              {...register("DeliveryDate")}
            />
            {errors?.DeliveryDate && (
              <div id="DeliveryDateFeedback" className="invalid-feedback">
                {errors?.DeliveryDate?.message}
              </div>
            )}
          </label>
          <label htmlFor="">
            CreateDate
            <input
              className={`${errors?.CreateDate && "is-invalid"} form-control`}
              aria-describedby="CreateDateFeedback"
              {...register("CreateDate")}
            />
            {errors?.CreateDate && (
              <div id="CreateDateFeedback" className="invalid-feedback">
                {errors?.CreateDate?.message}
              </div>
            )}
          </label>
          <DefaultButton
            type="submit"
            conteudo="Create"
            className="btn btn-sm btn-danger ms-1"
          />
        </form>
      </div>
    </div>
  );
}
