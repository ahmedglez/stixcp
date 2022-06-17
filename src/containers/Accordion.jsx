import React from 'react';
import '../styles/Accordion.scss';

const Accordion = () => {
	return (
		<div class='demo'>
			<div class='container pt-5 pb-5'>
				<div class='row'>
					<div class='col-md-6'>
						<div
							class='panel-group mt-3 pb-5 mb-5'
							id='accordion'
							role='tablist'
							aria-multiselectable='true'>
							<h2 className='accordion-title text-center mb-5'>
								Somos la mejor elección.
							</h2>
							<div class='panel panel-default '>
								<div class='panel-heading' role='tab' id='headingOne'>
									<h4 class='panel-title'>
										<a
											role='button'
											data-toggle='collapse'
											data-parent='#accordion'
											href='#collapseOne'
											aria-expanded='true'
											aria-controls='collapseOne'>
											Garantizamos la calidad de nuestros servicios
										</a>
									</h4>
								</div>
								<div
									id='collapseOne'
									class='panel-collapse collapse in collapse show '
									role='tabpanel'
									aria-labelledby='headingOne'>
									<div class='panel-body'>
										<p>
											Todos nuestros servicios están garantizados con un
											seguimiento para su posterior mantenimiento, labor que
											extenderá la vida útil de sus equipos y el buen
											funcionamiento de los sistemas instalados. .{' '}
										</p>
									</div>
								</div>
							</div>
							<div class='panel panel-default'>
								<div class='panel-heading' role='tab' id='headingTwo'>
									<h4 class='panel-title'>
										<a
											class='collapsed'
											role='button'
											data-toggle='collapse'
											data-parent='#accordion'
											href='#collapseTwo'
											aria-expanded='true'
											aria-controls='collapseTwo'>
											Más de 10 años de experiencia
										</a>
									</h4>
								</div>
								<div
									id='collapseTwo'
									class='panel-collapse collapse'
									role='tabpanel'
									aria-labelledby='headingTwo'>
									<div class='panel-body'>
										<p>
											Llevamos brindando nuestros servicios desde el año 2012,
											siendo una de las primeras empresas dedicadas a este tipo
											de tecnologías. Hasta la fecha hemos concluido numerosos y
											variados contratos tanto con empresas estatales, pequeños
											negocios y clientes que solo quieren asegurar su hogar.{' '}
										</p>
									</div>
								</div>
							</div>
							
							<div class='panel panel-default'>
								<div class='panel-heading' role='tab' id='headingThree'>
									<h4 class='panel-title'>
										<a
											class='collapsed'
											role='button'
											data-toggle='collapse'
											data-parent='#accordion'
											href='#collapseThree'
											aria-expanded='false'
											aria-controls='collapseThree'>
											Personal y técnicos calificados.
										</a>
									</h4>
								</div>
								<div
									id='collapseThree'
									class='panel-collapse collapse'
									role='tabpanel'
									aria-labelledby='headingThree'>
									<div class='panel-body'>
										<p>
											Año tras año nos encargamos de capacitar a nuestros
											técnicos con cursos y talleres brindadas por nuestros
											proveedores en tecnologías como Hikvision, Allmatic,
											Syscom y Honeywell Tenemos además el privilegio de incluir
											entre nuestro personal a trabajadores con un alto nivel de
											estudios, incluyendo másters y doctores en ciencias. .{' '}
										</p>
									</div>
								</div>                                
							</div>

                            <div class='panel panel-default'>
								<div class='panel-heading' role='tab' id='headingThree'>
									<h4 class='panel-title'>
										<a
											class='collapsed'
											role='button'
											data-toggle='collapse'
											data-parent='#accordion'
											href='#collapseFour'
											aria-expanded='false'
											aria-controls='collapseThree'>
											Contacto directo con nuestro proveedor.
										</a>
									</h4>
								</div>
								<div
									id='collapseFour'
									class='panel-collapse collapse'
									role='tabpanel'
									aria-labelledby='headingThree'>
									<div class='panel-body'>
										<p>
											Adquirimos nuestra tecnología directamente de los
											proveedores oficiales, permitiéndonos brindar una mayor
											gamma de productos para ofrecer al usuario y una mejor
											atención al cliente, además de mantenernos actualizados
											constantemente acerca de las nuevas ofertas que surgen en
											el mercado .{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
