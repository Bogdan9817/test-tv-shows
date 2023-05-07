import { useContext } from "react";
import { Context } from "../../../context/Context";
import Card from "./Card";

export default function Cardlist() {
  const { state } = useContext(Context);

  return (
    <div className='shows-cardlist'>
      {state.shows?.length > 0 &&
        state.shows.map(({ show }: any) => {
          return (
            <Card
              key={show.id}
              name={show.name}
              rating={show.rating}
              img={show.image}
              id={show.id}
            />
          );
        })}
    </div>
  );
}
