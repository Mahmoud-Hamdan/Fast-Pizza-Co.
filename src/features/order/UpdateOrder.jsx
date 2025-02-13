/* eslint-disable react/prop-types */
import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

// eslint-disable-next-line no-unused-vars
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary"> Make Priority </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  return null;
}
