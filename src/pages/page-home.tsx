import Container from "../components/container";
import PhotoList from "../contexts/photos/components/photo-list";


export default function PageHome(){
    return (
        <Container>
            <PhotoList photos={[
                        
            ]} loading/>           
        </Container>
    );
}