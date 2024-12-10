import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { dcreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecrease() {
    dispatch(dcreaseItemQuantity(pizzaId));
  }

  return (
    <div className="ml-auto space-x-2 mr-2 md:mr-3">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="font-semibold">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
