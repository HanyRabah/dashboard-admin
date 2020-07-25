import { useForm } from "react-hook-form";

const TractorForm = ({onSubmit, data: initialData = {}}) => {
  const { register, handleSubmit } = useForm({defaultValues: initialData});

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          ref={register}
          id="name"/>
      </div>
      <button
        type="submit"
        className="btn btn-primary">Create
      </button>
  </form>
  )
}

export default TractorForm;
