import classNames from 'classnames';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const TM = ({ children, className }: Props) => <span className={classNames('tm', className)}>{children}</span>;

export default TM;
