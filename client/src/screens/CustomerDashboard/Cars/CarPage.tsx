import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCarByIdRequest } from "../../../services/CarService";
import { setCurrentCar } from "../../../stores/car/slice";
import { useAppDispatch, useAppSelector } from "../../../stores/store";

const CarPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentCar = useAppSelector((state) => state.car.currentCar);

  const fetchCar = async () => {
    if (!id || parseInt(id) < 0) {
      navigate("/dashboard/cars");
    }

    const car = await getCarByIdRequest(parseInt(id!));

    if (!car) {
      navigate("/dashboard/cars");
    }

    dispatch(setCurrentCar(car));
  };

  React.useEffect(() => {
    fetchCar();
  }, []);

  return (
    <div>
      `${id} ${currentCar.manufacturer.name} ${currentCar.model}`
    </div>
  );
};

export default CarPage;
