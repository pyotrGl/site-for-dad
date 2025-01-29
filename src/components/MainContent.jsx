import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FirstPhoto from "../IMG/FirstPhoto.jpg";
import SecondPhoto from "../IMG/SecondPhoto.jpg";
import ThirdPhoto from "../IMG/ThirdPhoto.jpg";

function MainContent() {
	return (
		<Container className="py-4">
			<h1 className="text-center mb-4">Немного о нас</h1>
			<Row>
				<Col>
					<p>
						Мы предоставляем услуги по перевозке, разгрузке и погрузке по
						Новосибирску и области. Грузоперевозками на самогрузах
						(манипуляторах) мы занимаемся уже довольно давно. За это время наши
						водители приобрели богатый опыт в оказании этих услуг и работе с
						клиентами. Мы относимся к работе очень ответственно, выполняем её
						качественно и в установленные сроки. Безопасность также всегда
						является приоритетом в нашей работе.
					</p>
				</Col>
			</Row>
			<Row className="text-center my-3">
				<Col>
					<Image src={FirstPhoto} alt="Манипулятор 1" fluid rounded />
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						Стоимость перевозки рассчитывается индивидуально и зависит от
						габаритов, веса груза и сложности выполнения задачи. Наш подход
						позволяет обеспечить клиентам прозрачность и выгодные условия
						сотрудничества, избавляя их от лишних хлопот.
					</p>
				</Col>
			</Row>
			<Row className="text-center my-3">
				<Col>
					<Image src={SecondPhoto} alt="Манипулятор 2" fluid rounded />
				</Col>
			</Row>
			<Row className="text-center my-3">
				<Col>
					<Image src={ThirdPhoto} alt="Манипулятор 3" fluid rounded />
				</Col>
			</Row>
		</Container>
	);
}

export default MainContent;
