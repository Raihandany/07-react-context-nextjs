import Heading from "../atoms/heading";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading>Title</Heading>
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                </Section>
                <Section>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-heading</Heading>
                </Section>
            </Section>
        </Section>
    );
}

// Practicum 2
// return (
//     <Section level = {1}>
//         <Heading>Judul</Heading>
//         <Section level={2}>
//             <Heading>Heading</Heading>
//             <Heading>Heading</Heading>
//             <Heading>Heading</Heading>
//             <Section level={3}>
//                 <Heading>Sub-heading</Heading>
//                 <Heading>Sub-heading</Heading>
//                 <Heading>Sub-heading</Heading>
//             </Section>
//             <Section level={4}>
//                 <Heading>Sub-sub-heading</Heading>
//                 <Heading>Sub-sub-heading</Heading>
//                 <Heading>Sub-sub-heading</Heading>
//             </Section>
//         </Section>
//     </Section>
// );