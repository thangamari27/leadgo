import { NavLink } from 'react-router-dom'
import { notFoundContent } from '../../utils/constant/LeadConstant'
import { notFoundStyles } from '../../utils/styles/LeadStyles';

function NotFoundSection() {
  const content = notFoundContent;
  const styles = notFoundStyles;
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h1 className={styles.title}>
                {content.title}
            </h1>
            <p className={styles.description}>
                {content.description}
            </p>
            <NavLink
                to={content.button.link}
                className={styles.button}
            >
                {content.button.text}
            </NavLink>
        </div>
    </section>
  )
}

export default NotFoundSection