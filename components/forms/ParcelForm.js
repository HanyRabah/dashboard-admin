import { useForm } from "react-hook-form";

const ParcelForm = ({onSubmit, data: initialData = {}}) => {
  const { register, handleSubmit } = useForm({defaultValues: initialData});

  const submitForm = (data) =>{
    onSubmit(data)
  }
  return(
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          ref={register}
          id="name"/>
      </div>
      <div className="form-group">
        <label htmlFor="culture">Culture</label>
        <input
          name="culture"
          type="text"
          className="form-control"
          ref={register}
          id="culture"/>
      </div>
      <div className="form-group">
        <label htmlFor="area">Area</label>
        <input
          name="area"
          type="text"
          className="form-control"
          ref={register}
          id="area"/>
      </div>
      <button
        type="submit"
        className="btn btn-primary">Create
      </button>
  </form>
  )
}

export default ParcelForm;
