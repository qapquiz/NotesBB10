//create Database
var db = window.openDatabase ("NotesBB10", "1.0", "Database for collecting ease note in this program.", 5*1024*1024);
//finish create Database

//create table
db.transaction (function (tx)
{
	tx.executeSql ("CREATE TABLE IF NOT EXISTS NOTES (id unique, title, description)");			
});
//finish create table
//create function table
function insertNotesRow (database, fnId, fnTitle, fnDescription)
{
	var id = fnId;
	var title = fnTitle;
	var description = fnDescription;
	database.transaction(function (tx)
	{
		tx.executeSql ("INSERT INTO NOTES VALUES (?, ?, ?)", [id, title, description]);
		console.log("test");
	});
}
	
function deleteNotesRow (database, fnTitle)
{
	var title = fnTitle;
	database.transaction (function (tx)
	{
		tx.executeSql ('DELETE FROM NOTES WHERE title = ?', [title], null);
	});
}

function updateNotesRow (database, fnId, fnTitle, fnDescription)
{
    var id = fnId;
    var title = fnTitle;
    var description = fnDescription;
    database.transaction(function (tx)
    {
        tx.executeSql("UPDATE NOTES SET title = ?, description = ? WHERE id = ?", [title, description, id]);
    });
}

function queryFromNote (database)
{
	database.transaction (function (tx)
	{
		tx.executeSql ("SELECT * FROM NOTES", [], function (tx, results)
		{
			return results;
		}, null);
	});
}
