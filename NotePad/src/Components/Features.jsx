import { Link } from "react-router-dom"

export const Features=()=>{
    return(
        <div className="p-[20px] font-serif">
            <div>
                <h1 className="text-4xl text-green-600 font-bold">Feature Request</h1><hr/><br/>
                <p><Link className="text-blue-600">Feedback Forum -</Link> We'd love to hear your ideas, thoughts, and suggestions. Please submit your feedback or feature requests through our feedback forum.</p>
            <h2 className="text-4xl mt-[20px] text-green-600 font-bold">Getting Started</h2>
            <hr/><ul>
                <li><span className="text-lg font-semibold">1. Guest User:</span> Stay anonymous and save notes without signing in. You can come back and edit your notes at anytime as long as you don't delete your browser cookies.</li>
            <li><span className="text-lg font-semibold">2. Registered User: </span>Sign up for a FREE account so you can save your notes as private notes and log back in from anywhere to edit them.
            </li>
            </ul>
            <h1 className="text-2xl text-blue-700 mt-[10px]">Here is a list of neat things you can do with Notify</h1>
            <ol>
                <li>1. Save notes without creating an account. All your notes will be "Public" and you can only edit them from the same web browser</li>
                <li>2. Register a free account and save notes as either "Public", "Private", or "Password Protected"</li>
                <li>3. Easily share notes via Twitter, Facebook etc.</li>
                <li>4. Use a powerful HTML editor to enhance the way your notes look</li>
                <li>5. Create multiple folders to organize your notes and sort your notes by date or title</li>
                {/* <li>Download your notes in PDF, MS Word, ODT, and Text format</li> */}
                <li>6. Focus on your work without the need of keep saving your notes with Auto-save feature</li>
                <li>7. Quickly browse through your notes with the note preview button</li>
                <li>8. Make your note Password Protected so only people with password can read your note</li>
                <li>9. Set an editor's password on your note so multiple people can edit a single note</li>
                <li>10. Set customized time zone, auto-save note option, and new note default access in Settings page</li>
                {/* <li>Download all notes in Zip archive from Settings page</li> */}
                <li>11. Enable or disable note commenting in Settings page</li>
                <li>12. Set color theme to Light, Warm, and Dark in Settings page</li>
                {/* <li>Import from Word and PDF document and turn it into a note
                </li> */}
                <li>13. Set fixed width font for plain text note in Settings page</li>
                <li>14. Create checklists with note type dropdown</li>
                <li>15. Share all public notes in a folder through folder sharing</li>
                <li>16. [New] Record and attach audio to notes</li>
            </ol>
            <h1 className="text-blue-700 text-xl mt-[10px]">Why use Notify? Here are some ideas</h1>
            <p>Notify.com is an online text editor that gives web user a simple tool to take and share notes online. User notes are saved through a secure internet connection to our cloud servers. Notify.com is free and can be accessed from anywhere at any time.</p>
           <h3  className="text-blue-700 text-xl mt-[10px]">Note Permission</h3>
           <h5>When you share your note as an online web page with others. You can set note permission to control who can see your note.</h5>
           <ol>
            <li><span className="text-green-600 text-xl font-bold">Private Note -</span> Only you can read and edit</li>
            <li><span className="text-green-600 text-xl font-bold">Public Note -</span> Everyone who knows the URL can read</li>
            <li><span className="text-green-600 text-xl font-bold">Password Protected Note - </span>Only people with password can read</li>
           </ol>
           <p>If you enable Guest Edit option on your note, people with note editing password can also edit your note at Notify.com website.</p>
            <h3>Note Types</h3>
            <ul>
                <li><span className="text-green-600 text-xl font-bold">Plain Text Note -</span> Text note without formatting. Plain text note can use fixed width font as well</li>
            </ul>
            <p>If you have any questions or any other ideas on improving Notify, please send an email at support@Notify.com. We'd love to hear from you!</p>
            </div>
        </div>
    )
}