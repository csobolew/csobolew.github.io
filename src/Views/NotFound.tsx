
import { Title, Text} from '@mantine/core';

const NotFound = () => {
    return (
        <>
        <section id='notfound'>
            <div>
                <Title order={1}>404 Page Not Found</Title>
            </div>
            <div>
                <Text fz='xl'>
                    The page you were looking for does not exist. Click here to go back:&nbsp;
                </Text>
                <Text fz='xl'>
                    <a href='/'>Home</a>
                </Text>
            </div>
        </section>
        </>
    )
}
export default NotFound;