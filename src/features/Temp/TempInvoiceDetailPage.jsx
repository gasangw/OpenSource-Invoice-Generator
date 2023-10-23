// temporary compinent for invoice detail page
import { PropTypes } from 'prop-types';

function TempInvoiceDetailPage({invoiceData}) {
    return (
        <div>
                <pre>
                        <code>
                                {JSON.stringify(invoiceData, null, 2)}
                        </code>
                </pre>
        </div>
    )
}

TempInvoiceDetailPage.propTypes = {
    invoiceData: PropTypes.object.isRequired,
};

export default TempInvoiceDetailPage