import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";


export default function PageHome(){
    return (
        <Container>
            <div className="grid grid-cols-4">
                <PhotoWidget photo={{
                    id:"1",
                    title:"Sample Photo1",
                    imageId:"portrait-tower.png",
                    albums:[
                        {id:"1",title:"Sample Album 1"},
                        {id:"2",title:"Sample Album 2"},
                        {id:"3",title:"Sample Album 3"}
                    ],
                }} loading={false} />

                <PhotoWidget photo={{
                    id:"2",
                    title:"Sample Photo2",
                    imageId:"portrait-tower.png",
                    albums:[
                        {id:"1",title:"Sample Album 1"},
                        {id:"2",title:"Sample Album 2"},
                        {id:"3",title:"Sample Album 3"}
                    ],
                }} loading={false} />

                <PhotoWidget photo={{
                    id:"3",
                    title:"Sample Photo3",
                    imageId:"portrait-tower.png",
                    albums:[
                        {id:"1",title:"Sample Album 1"},
                        {id:"2",title:"Sample Album 2"},
                        {id:"3",title:"Sample Album 3"}
                    ],
                }} loading={false} />    

                <PhotoWidget 
                    photo={{} as Photo}
                    loading={true}
                />            
            </div>
        </Container>
    );
}