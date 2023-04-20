import Cookies from "js-cookie";
import { OrderDetails } from "../../model";
import { useOrderDetailsNextStageMutation } from "../../app/services";
interface Props {
    deliveryStatus: number
    setDeliveryStatus: React.Dispatch<React.SetStateAction<number>>
}
function Logic({deliveryStatus, setDeliveryStatus}: Props) {
  const statusSummary = (stage: number) => {
    let summary = "notActive";

    if (deliveryStatus == stage) {
      summary = "active";
    }

    if (deliveryStatus > stage) {
      summary = "completed";
    }

    return summary;
  };
  const [orderNextStageMutation] = useOrderDetailsNextStageMutation()
  const orderNextStage = (id: number) => {
    try {
      const res: any = orderNextStageMutation({
        id,
        deliveryStatus
      });
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  

  return {
    statusSummary,
    orderNextStage
  };
}

export default Logic;