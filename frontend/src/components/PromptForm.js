const PromptForm = ({ prompt, handlePrompt, handlePromptChange }) => {
    return (
        <div className='prompt-area'>
            <form onSubmit={handlePrompt} className='prompt-form'>
                <div>
                    <input
                        id='prompt'
                        placeholder='Enter your prompt here'
                        value={prompt}
                        onChange={handlePromptChange}
                    />
                </div>
                <button id='prompt-send-btn' type='submit'>
                    OK
                </button>
            </form>
        </div>
    )
}

export default PromptForm
