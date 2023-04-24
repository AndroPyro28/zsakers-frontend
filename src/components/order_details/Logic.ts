import Cookies from "js-cookie";
import { OrderDetails } from "../../model";
import { useOrderDetailsNextStageMutation } from "../../app/services";
interface Props {
    deliveryStatus: number
    setDeliveryStatus: React.Dispatch<React.SetStateAction<number>>
    setDisable: React.Dispatch<React.SetStateAction<boolean>>
}
function Logic({deliveryStatus, setDeliveryStatus, setDisable}: Props) {
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
  const orderNextStage = async (id: number) => {
    try {
      setDisable(true)
      const res: any = await orderNextStageMutation({
        id,
        deliveryStatus
      });
      setDisable(false)
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