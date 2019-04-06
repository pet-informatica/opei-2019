import React, {Component} from 'react';
import Accordion from './../../../components/Accordion/AccordionCustom';
import Title from './../../../components/Title/Title';
import { HashLink as Link } from 'react-router-hash-link';
import { Grid, GridRow, Container } from 'semantic-ui-react';

import './FAQ.css'

export default class FAQ extends Component{
	render(){
		const items = [
			{
				title: <p>Quando será a premiação?</p>,
				content: <p>Estamos organizando a cerimônia de premiação para acontecer o mais rápido possível. No entanto, existem algumas pendências da própria UFPE, o que infelizmente não permite marcar uma data por agora, mas assim que esta for definida, anunciaremos no site da OPEI e na nossa página do Facebook.</p>
			},
			{
				title: <p>Quando sairá o resultado?</p>,
				content: <p> Logo após o anúncio da data da premiação, liberaremos os convites para nossa cerimônia, e os resultados como descrito no Regulamento, seção 7 - Resultados, tópico 7.4: Será enviada para todos os delegados uma lista contendo os alunos medalhistas, porém sem a colocação exata de cada aluno. Essa informação será divulgada na cerimônia de premiação.</p>
			},
			{
				title: <p>Como é a cerimônia de premiação?</p>,
				content: <p>Todos os/as alunos/as premiados/as estão convidados, além de seus familiares, delegados da escola, amigos. Teremos uma palavra dos nossos patrocinadores, entrega das medalhas, troféus e certificados - Apenas os medalhistas receberão versão impressa, porém todos os alunos e delegados inscritos terão direito a certificado.</p>
			},
			{
				title: <p>Qual o critério de desempate?</p>,
				content: <p>Como informado no regulamento, seção 7 - Resultados, tópico 7.3: Em caso de empate na colocação dos alunos, será utilizada a data de nascimento deles como critério de desempate, no qual os alunos mais velhos serão beneficiados. Assim, o aluno com maior idade tem preferência em caso de empate com competidor mais novo.
				</p>
			}
		];
		return(
			<div>
				<Title name="Perguntas Frequentes"/>
				<p>Tem alguma dúvida? Veja se encontra a resposta aqui! Caso contrário, entre em <Link to="/#contato">contato</Link> conosco! </p>						
				<Container>
					<Grid>
						<GridRow id="accordion-item">
							<Accordion items={items}/>
						</GridRow>
					</Grid>
				</Container>
				
			</div>
		);
	}
}