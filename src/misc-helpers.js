const MiscHelpers = {

    generateErrorMessage(error) {
        if (error) {
            return (
                <div className='error-message'>
                    {error}
                </div>
            )
        }
    },

}

export default MiscHelpers;