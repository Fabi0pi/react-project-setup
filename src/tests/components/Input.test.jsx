import {describe, expect, test} from 'vitest'
import { InputForm } from '../../components/Input'
import {render, screen} from '@testing-library/react'

describe("InputForm", () => {
    test('renders', (theme) => {
        render(<InputForm theme={theme} label='test' type='text' />)
        expect(screen.getByText("Increase")).toBeDefined();
    })
})