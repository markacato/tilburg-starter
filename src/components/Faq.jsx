import { Heading } from '@utrecht/component-library-react/dist/css-module'
import { AccordionProvider } from '@utrecht/component-library-react'
import clsx from 'clsx'

export const Faq = ({faqItems = []}) => {

    const classes = clsx('faq')

    return (
        <section className={classes}>
            <Heading level={2}>FAQ</Heading>
            <AccordionProvider sections={faqItems} />
        </section>
    )
}
