import { useParams } from "react-router";
import Text  from "../components/text";
import Divider from "../components/divider";

export default function PagePhotoDetails(){

    const { id } = useParams();

    return (
        <>
            <Text variant="heading-medium">Photo Details</Text>
            <Divider />
            <Text>ID: {id}</Text>
        </>
    );
}