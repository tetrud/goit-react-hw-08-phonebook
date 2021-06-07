import Title from '../../components/Title';
import './HomeView.scss';

const HomeView = () => {
  return (
    <section className="Section">
      <Title title="Phonebook" />
      <p className="Description">Please, login or register to view contacts</p>
    </section>
  );
};

export default HomeView;
