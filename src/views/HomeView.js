const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    frontWeight: 500,
    frontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phonebook</h1>
  </div>
);

export default HomeView;
