/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormFieldProps {
  label: string;
  icon: string;
  name: string;
  register: any;
  required?: boolean;
}
interface FormValues {
  hotel: string;
  location: string;
  guests: string;
  rooms: string;
  checkIn: string;
  checkOut: string;
}
const FormField: React.FC<FormFieldProps> = ({
  label,
  icon,
  name,
  register,
  required = false,
}) => (
  <div className="flex flex-col justify-center px-2 py-1.5 w-full bg-white rounded-sm border border-solid border-black border-opacity-10">
    <div className="flex gap-2 justify-between p-2">
      <label className="my-auto" htmlFor={name}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <img
        loading="lazy"
        src={icon}
        className="shrink-0 w-6 aspect-square"
        alt=""
      />
    </div>
    <input
      id={name}
      {...register(name, { required })}
      className="border-none text-black w-full focus:ring-0 focus:outline-none"
    />
  </div>
);

const BookingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col text-base text-red-600 text-opacity-70 max-md:mt-10">
        <FormField
          label="Number of guests"
          icon="images/arrow-down.svg"
          name="guests"
          register={register}
          required
        />
        {errors.guests && (
          <span className="text-red-600">This field is required</span>
        )}

        <FormField
          label="Number of rooms"
          icon="images/arrow-down.svg"
          name="rooms"
          register={register}
          required
        />
        {errors.rooms && (
          <span className="text-red-600">This field is required</span>
        )}

        <div className="flex gap-2.5 mt-6">
          <div className="flex flex-col justify-center items-start px-4 py-3.5 bg-white rounded-sm border border-solid border-black border-opacity-10 max-md:pr-5">
            <div className="flex gap-2">
              <label htmlFor="checkIn" className="my-auto">
                Check-in <span className="text-red-600">*</span>
              </label>
              <img
                loading="lazy"
                src="images/datepicker.svg"
                className="shrink-0 w-6 aspect-square"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-4 py-3.5 bg-white rounded-sm border border-solid border-black border-opacity-10">
            <div className="flex gap-2">
              <label htmlFor="checkOut" className="my-auto">
                Check-out <span className="text-red-600">*</span>
              </label>
              <img
                loading="lazy"
                src="images/datepicker.svg"
                className="shrink-0 w-6 aspect-square"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
