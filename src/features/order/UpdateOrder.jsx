import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    // fetcher.form is a component that allows you to submit forms and interact with
    // route actions and loaders without causing a full page navigation.
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make a priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
