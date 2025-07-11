
import CounterCard from '../components/CounterCard'
import CounterCardCL from '../components/ClassComponents/CounterCard'
import Parent from '../components/ContextExample/parent'

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded">
                    <CounterCard />
                </div>
                <div className="p-4 rounded">
                    <CounterCardCL msg="Hello from Parent Component"/>
                </div>
            </div>

            <Parent />
        </>
    )
}