import Heading from "./heading";
import Section2 from "./section2";

export default function Post({ title, body }: { title: string, body: string }) {
    return(
        <Section2 isFancy={true}>
            <h4>Name : Raihan Dany Radhinnur</h4>
            <h4>NIM  : 2141720166</h4>
            <br />
            <Heading>   
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section2>
    );
}