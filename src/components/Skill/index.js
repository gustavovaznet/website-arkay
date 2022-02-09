//SKILL COMPONENT

//IMPORTING
import skillImg from '../../assets/skill.jpg';
import skillShape from '../../assets/skill-shape.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

//SKILLS
const skills = [
    {
        id: 1,
        title: 'Business Growth',
        skillNum: 80,
        image: skillShape
    },
    {
        id: 2,
        title: 'Valor de Mercado',
        skillNum: 65,
        image: skillShape
    },
    {
        id: 3,
        title: 'Clientes Ativos',
        skillNum: 73,
        image: skillShape
    }
]

//SKILL
const Skill = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="skill-content">
                            <div className="sub-title"><span className="border-left"></span>Nossas Habilidades</div>
                            <h3 className="sec-title">
                                Soluções Invadoras para o Seu Negócio
	                        </h3>
                            <p className="sec-desc">
                            Um consultor é alguém que possui algum nível de especialização que um determinado grupo de pessoas considera valioso, e as pessoas dentro desse grupo estão dispostas a pagar o consultor.
	                        </p>
                            <div className="skill-wrapper">
                                {
                                    skills?.map(skill => {
                                        return (
                                            <div key={skill?.id} className="skill-item">
                                                <div className="skill-number" style={{ backgroundImage: `url(${skill?.image})` }}>
                                                    <h2>
                                                        <CountUp end={skill?.skillNum} redraw={true}>
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor onChange={start} delayedCall>
                                                                    <>
                                                                        <span ref={countUpRef} />
                                                                        <span className="suffix">%</span>
                                                                    </>
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                    </h2>
                                                </div>
                                                <p>{skill?.title}</p>
                                            </div>
                                        );
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="skill-thumb">
                            <div className="angle-top"></div>
                            <img src={skillImg} alt="" />
                            <div className="angle-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
