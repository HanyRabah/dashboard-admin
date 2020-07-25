import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';


const ProcessForm = ({onSubmit, tractors, parcels}) => {
  const [ selectedParcel, setSelectedParcel ] = useState();
  const [ pickDate, setPickDate ] = useState();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register({name: 'date'})
  },[register]);


  const handleDateChange = (date) => {
    setValue('date', date);
    setPickDate(date);
  }

  const handleParcelChange = (e) => {
    var index = e.target.selectedIndex;
    var _id = e.target[index].id;
    if(_id) {
      const currentParcel = parcels.find(parcel => parcel._id === _id);
      setSelectedParcel(currentParcel);
    } else {
      setSelectedParcel("");
    }
  }

  const submitForm = (data) => {
    const finalData = {...data, parcel_id: selectedParcel._id}
    onSubmit(finalData)
  }
 
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="form-group">
        <label htmlFor="tractor">Tractor</label>
        <select
          name="tractor"
          type="text"
          className="form-control"
          ref={register}
          id="tractor">
            <option>Select Tractor</option>
            {tractors && tractors.map(tractor => <option key={tractor._id}>{tractor.name}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="parcel">Parcel</label>
        {parcels.length > 0 ?
        <select
          name="parcel"
          type="text"
          className="form-control"
          ref={register}
          onChange={handleParcelChange}
          id="parcel">
            <option>Select Parcel</option>
            {parcels && parcels.map(parcel => <option key={parcel._id} id={parcel._id}>{parcel.name}</option>)}
        </select>
        : <div className="alert alert-danger">All parcels has been processed</div>}
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <div>
        <DatePicker 
          className="form-control"
          selected={pickDate}
          onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="form-group">
          <label htmlFor="area">Area</label>
          <input 
          type="text" 
          name="area" 
          id="area" 
          className="form-control"
          placeholder="Area will be automaticlly selected when you choose parcel"
          ref={register} 
          defaultValue={selectedParcel && selectedParcel.area}
          />
      </div>
      <button
        type="submit"
        className="btn btn-primary">Save
      </button>
  </form>
  )
}

export default ProcessForm;
