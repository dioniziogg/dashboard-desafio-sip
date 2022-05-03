import { Container } from "./style";

interface CardInfoProps {

    icon: React.FC<React.SVGProps<SVGSVGElement>>
    title: string
    quant: string;

}

export const CardInfo = ({icon:Icon, title, quant}:CardInfoProps) => {

    return(

        <Container>
            <Icon />
            <div>
                <strong>{title}</strong>
                <span>{quant}</span>
            </div>
            
        </Container>

    );

}