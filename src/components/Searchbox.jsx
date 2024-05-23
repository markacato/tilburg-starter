import { Heading, PrimaryActionButton, Textbox } from '@utrecht/component-library-react/dist/css-module'
import clsx from 'clsx'

export const Searchbox = () => {

    const classes = clsx('searchbox')

    return (
        <section className={classes}>
            <Heading level={1}>Zoeken</Heading>
            <Textbox placeholder="Vul je zoekterm in" />
            <PrimaryActionButton onClick={() => console.log('test')}>
                Click me
            </PrimaryActionButton>


        </section>
    )
}
